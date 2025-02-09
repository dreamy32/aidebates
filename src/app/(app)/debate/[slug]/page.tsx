import { Bot, Calendar, Tag, User, Search, Home, BookOpen, Info } from 'lucide-react';
import { mockDebates, mockUsers, mockAIResponses } from '@/lib/mockData';
import DebateContent from '@/components/DebateContent';
import DebateOverview from '@/components/DebateOverview';
import NavLink from '@/components/NavLink';
import DetailItem from '@/components/DetailItem';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import payloadConfig from '@/payload.config';

interface params {
  params: Promise<{ slug: string }>;
}
export default async  function DebatePage({ params }: params) {
  const {slug} = await params;


  // const responses = mockAIResponses.filter(response =>
  //   debate.aiResponses.includes(response.id)
  // );

  // const getUser = (userId: string) => {
    //   return mockUsers.find(user => user.id === userId);
    // };
    const payload = await getPayload({ config: payloadConfig })
    const getDebate = (await payload.find({
      collection: 'debates',
      limit: 1,
      where: {
        slug: {
          equals: slug
        }
      }
    })).docs[0];
    const debate = getDebate;
    if (!debate) {
      notFound();
    }
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="max-w-content mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16">
        <h1 className="text-title font-semibold mb-6 sm:mb-8 text-text text-center sm:text-left">{debate.title}</h1>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Prompt Card */}
            <div className="bg-white dark:bg-text/5 rounded-xl border border-border p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-section font-semibold mb-3 sm:mb-4 text-text">Debate Prompt</h2>
              <p className="text-body text-placeholder leading-relaxed text-lg sm:text-xl">{debate.prompt}</p>
            </div>

            {/* Global Overview */}
            {debate.aiResponses && <DebateOverview responses={(debate.aiResponses).filter(response => typeof response !== 'string')} />}
            {/* AI Response Section */}
            {debate.aiResponses && <DebateContent debate={debate} />}
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-1/4 max-w-full sm:max-w-sidebar">
            <div className="bg-white dark:bg-text/5 rounded-xl border border-border p-4 sm:p-6 shadow-sm">
              <h2 className="text-subtitle font-semibold mb-4 sm:mb-6 text-text">Debate Details</h2>

              {/* Creator */}
              <DetailItem
                icon={<User className="w-4 h-4 sm:w-5 sm:h-5" />}
                // title={`${getUser(debate.createdBy)?.firstName} ${getUser(debate.createdBy)?.lastName}`}
                title='uh'
                subtitle="Creator"
              />

              {/* Created Date */}
              <DetailItem
                icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
                title={formatDate(debate.createdAt)}
                subtitle="Created"
              />

              {/* Tags */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-placeholder mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-small font-medium">Tags</span>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {debate.tags && debate.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-small font-medium bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag.tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Predicted Event Date */}
              <DetailItem
                icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
                title={formatDate(debate.predictedEventDate || '')}
                subtitle="Predicted Event Date"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}