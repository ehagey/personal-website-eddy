import BlogPost from '@/components/BlogPost';

const OnBalanceBlogPost = () => {
  return <BlogPost 
    title="On Balance" 
    date="November 7, 2026" 
    slug="on-balance" 
    content={
      <div>
        <p style={{ marginBottom: '24px' }}>Good qualities in people are not meant to work alone. The psychologist Paul Helwig described this in what he called the values square; namely, any quality held on its own tends to turn against itself, and it needs a partner quality to stay healthy. I find this to be one of the kindest ways a person can think about themselves.</p>

        <p style={{ marginBottom: '24px' }}>I am in my 20's, which to me is the decade of feedback. Nearly everything is new to me, from work to relationships to living independently, so I am finding out, often for the first time, how I come across to others and how I measure up. This feedback comes directly and indirectly, from friends, coworkers, family, and most often my own thoughts. I use it every day to improve myself; over time, I have noticed that many of my shortcomings come less from missing something good and more from having too much of one quality with nothing to balance it out.</p>

        <p style={{ marginBottom: '24px' }}>Helwig's point is that good qualities come in pairs, and each one gives the other its limit. Without a partner, nothing sets the limit for one quality, so it keeps growing past the point where it is virtuous (i.e., the same thing that makes someone admirable can sometimes make them difficult).</p>

        <p style={{ marginBottom: '24px' }}>There is a quote by Carl Jung that I love:</p>

        <div style={{ backgroundColor: 'var(--site-blockquote-bg)', padding: '24px', margin: '24px 0', borderLeft: '4px solid var(--site-border)', fontStyle: 'italic', textAlign: 'center' as const }}>
          Know all the theories, master all the techniques, but as you touch a human soul be just another human soul.
        </div>

        <p style={{ marginBottom: '24px' }}>I read it as describing a pair. Knowledge and technique matter, but alone they can leave us cold and mechanical. Humanity matters too, but alone it leaves us with good intentions and little ability to help. Each becomes more useful once the other is beside it.</p>

        <p style={{ marginBottom: '24px' }}>The same holds for gentleness and strength, as a matter of further example. Someone who is gentle only because they have no other option isn't really virtuous. They are just harmless. Real peacefulness belongs to the person who could cause harm, and who chooses not to. Gentleness without strength is closer to weakness, and strength without gentleness becomes a threat. It is the balance of the two that makes someone safe to be around, because they have the strength to protect others and the gentleness never to turn it against them.</p>

        <p style={{ marginBottom: '24px' }}>When feedback points out a flaw, I find that it comes down to which question we ask about ourselves. "What's wrong with me?" assumes something is broken, while "What is this part of me missing?" assumes something is already good but unfinished. What we are missing is often found in the people who feel most unlike us, and the ones we find hardest to understand. These people are not our opposites, and we can learn from them without becoming them.</p>
      </div>
    } 
  />;
};

export default OnBalanceBlogPost;
