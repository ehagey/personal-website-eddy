-- The LLM-generated query for "/ask anything" questions is often a WITH (CTE) query,
-- not a plain SELECT (e.g. "WITH filtered AS (...) SELECT ... FROM filtered"). The
-- original prefix check only allowed literal SELECT, rejecting those as unsafe even
-- though they're read-only. Allow WITH too; the keyword blacklist below is what
-- actually makes this safe (Postgres allows data-modifying CTEs, so this still blocks
-- "WITH t AS (DELETE ... RETURNING *) SELECT ...").
create or replace function public.run_readonly_query(query text)
returns jsonb
language plpgsql
security definer
set statement_timeout = '5s'
as $$
declare
  result jsonb;
begin
  if query !~* '^\s*(with|select)\b' then
    raise exception 'Only SELECT (or WITH ... SELECT) statements are allowed';
  end if;
  if query ~* '\b(insert|update|delete|drop|alter|truncate|grant|revoke|create)\b' then
    raise exception 'Query contains a disallowed keyword';
  end if;

  execute format('select coalesce(jsonb_agg(t), ''[]''::jsonb) from (%s) t', query) into result;
  return result;
end;
$$;

revoke all on function public.run_readonly_query(text) from public, anon, authenticated;
grant execute on function public.run_readonly_query(text) to service_role;
