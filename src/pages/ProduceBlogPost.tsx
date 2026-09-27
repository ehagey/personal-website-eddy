import BlogPost from '@/components/BlogPost';

const ProduceBlogPost = () => {
  return <BlogPost 
    title="Produce More than You Consume" 
    date="September 26, 2026" 
    slug="produce-more-than-you-consume" 
    content={
      <div>
        <p style={{ marginBottom: '24px' }}>Much of what goes on around us asks for our attention. Think of wars and conflicts near us and on the other side of the world, the news cycle that follows them, and everyday drama. It often feels as though keeping up with all of it is a responsibility. Some of it is deeply serious, but most of it is beyond our control, and following it, engaging with it, and thinking about it rarely leaves anyone better off. If anything, it leaves us drained and pulls our attention away from the people and situations in our own lives that actually deserve it.</p>

        <p style={{ marginBottom: '24px' }}>When our own lives feel unsettled, other people's conflicts offer distraction, or a sense of being involved in something that matters. A life with its own direction has less need for that. Having a dream, something we genuinely want to build or become, gives our attention somewhere to go, and working hard toward it makes that direction real. When our days are full of meaningful work, there is simply less room for noise. Part of that work, I think, is becoming more self-sufficient and producing more than we consume. Making something with care and deliberate effort, at work or at home (even the smallest things) leaves behind something tangible that can be used, shared, or built on. More concretely, it turns our attention into something that can be offered to others and makes us feel useful and of service in some broad sense.</p>

        <p style={{ marginBottom: '24px' }}>It makes little sense to take on the world's problems while our own are left untended. Criticism of distant things costs nothing and changes little, while our own lives are the one place where effort reliably has an effect. Once what's in front of us is tended to, distant problems feel less urgent because we see how little our worrying did for them. And nearby ones feel more real, because we see how much our effort does.</p>

        <p style={{ marginBottom: '24px' }}>A stable life also leaves more time, energy, and patience for others. Responsibility that is close has visible effects, and seeing that difference is where much of life's meaning is found.</p>

        <p style={{ marginBottom: '24px' }}>In the end, it comes down to asking whether something is truly ours to carry. The answer isn't always clear, but the question is worth asking. <strong>Much of what weighs on us belongs to someone else, and it can be set down without ceasing to care.</strong> What remains is attention for building a steady life and sharing it with our people around that we care about.</p>
      </div>
    } 
  />;
};

export default ProduceBlogPost;
