import BlogPost from '@/components/BlogPost';

type Lesson = { lead: string; rest: string };
type Section = { heading: string; lessons: Lesson[] };

const sections: Section[] = [
  {
    heading: 'With people',
    lessons: [
      { lead: "Actions say more than words.", rest: "What you do matters more than what you say. If anything, words are free. People also copy what you do more than what you say, whether they're children, friends, or coworkers." },
      { lead: "Don't keep score with the people close to you.", rest: "Relationships work better when you give freely instead of counting who did more." },
      { lead: "Keep your promises.", rest: "If you say you will call someone, call them." },
      { lead: "Reply, and get back to people when you said you would.", rest: "Even \"no update yet\" is better than leaving them to wonder." },
      { lead: "Be patient with other people's mistakes and shortcomings.", rest: "You might make them too, and you'd want the same patience." },
      { lead: "When someone you care about is hurting, show up.", rest: "You don't need to say much. Sometimes, there is nothing you can say at all, but still show up." },
      { lead: "An apology should say what you did wrong.", rest: "\"I'm sorry you felt that way\" doesn't take any responsibility." },
      { lead: "Be intentional about the people around you.", rest: "Treat the people in your life that you care about on purpose." },
      { lead: "Your people won't be around forever.", rest: "Call them, visit them, and talk to them while you can." },
      { lead: "Listen to feedback before you defend yourself.", rest: "You can always respond later, once you've thought about it." },
      { lead: "Being quiet doesn't mean you have nothing to say.", rest: "Sometimes you need to listen first." },
      { lead: "Respect a boundary the first time someone states it.", rest: "Even if you don't understand the reason, a no is enough." },
      { lead: "Ask people questions and remember the answers.", rest: "Pay attention when someone is telling you something or talking to you." },
      { lead: "Don't take anything someone does for you for granted.", rest: "Thank them directly every time, even if it is a regular thing they do for you, and don't expect a free ride from anyone." },
      { lead: "Be loyal to your friends, but don't lie for them.", rest: "Be honest, even when it's uncomfortable." },
      { lead: "It's fine to say \"I don't know.\"", rest: "People trust you more when you admit it than when you guess." },
      { lead: "Be on time.", rest: "It shows the other person that you value their time as much as your own." },
      { lead: "Pay attention to what people do when it costs them something.", rest: "That shows you what they really value." },
      { lead: "Ask for help when you need it.", rest: "Many people are happy to help, and letting them is a way of trusting them." },
    ],
  },
  {
    heading: 'With yourself',
    lessons: [
      { lead: "Give what you do your full effort.", rest: "If it isn't worth that, drop it. If it is, don't hold anything back." },
      { lead: "Don't make big decisions when you are angry or tired.", rest: "Wait a bit, and the right choice is usually clearer." },
      { lead: "Don't compare yourself to others.", rest: "You see their results, but you only see your own struggle." },
      { lead: "Make time for whatever keeps you grounded.", rest: "It gives you something steady to come back to when things are hard." },
      { lead: "Be as kind to yourself as you are to others.", rest: "When you fail, treat yourself the way you'd treat a friend who failed." },
    ],
  },
  {
    heading: 'Practical habits',
    lessons: [
      { lead: "Save something, even if it's a small amount.", rest: "The habit matters more than the amount when you're starting out." },
      { lead: "Learn to cook a few meals well.", rest: "It saves money, and it feels good to feed people." },
      { lead: "Write things down.", rest: "You'll forget more than you think, including the good moments." },
    ],
  },
];

const SmallLessonsBlogPost = () => {
  let count = 0;
  return <BlogPost
    title="Small Lessons"
    date="October 17, 2026"
    slug="small-lessons"
    content={
      <div>
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', marginTop: '32px', color: 'var(--site-text)' }}>{section.heading}</h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {section.lessons.map((lesson) => {
                count += 1;
                return (
                  <li key={count} style={{ marginBottom: '20px', paddingLeft: '28px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--site-text-muted)' }}>{count}.</span>
                    <strong>{lesson.lead}</strong> {lesson.rest}
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    }
  />;
};

export default SmallLessonsBlogPost;
