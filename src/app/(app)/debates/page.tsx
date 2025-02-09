import { Bot, Calendar, Tag, User, Search } from 'lucide-react';
import { mockDebates, mockUsers } from '@/lib/mockData';
import Link from 'next/link';
import payloadConfig from '@/payload.config';
import { getPayload } from 'payload';

export default async function DebatesPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  const payload = await getPayload({ config: payloadConfig })
  const myDebates = await payload.find({
    collection: 'debates',  
  });
  // con
  // const getUser = (userId: string) => {
  //   return mockUsers.find(user => user.id === userId);
  // };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="max-w-content mx-auto px-6 pt-28 pb-16">
        <h1 className="text-title font-semibold text-text mb-8">AI Debates</h1>
        {/* Search Bar */}
        <div className="max-w-[600px] mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text" />
            <input
              type="text"
              placeholder="Search debates..."
              className="w-full bg-background border border-border rounded-lg pl-12 pr-4 py-3 text-[18px] text-text placeholder-placeholder/70 focus:outline-none focus:border-[#2792FD] transition-colors"
            />
          </div>
        </div>

        {/* Debates Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {myDebates.docs.map(d => {
            const creator = d.createdBy;
            return (
              <Link 
                key={d.id} 
                href={`/debate/${d.slug}`}
                className="bg-white dark:bg-text/5 rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]"
              >
                <h2 className="text-subtitle font-semibold mb-4 text-text">
                  {d.title}
                </h2>
                <p className="text-placeholder mb-6 line-clamp-3">
                  {d.prompt}
                </p>
                
                {/* Meta Information */}
                <div className="space-y-4">
                  {/* Creator */}
                  <div className="flex items-center text-small">
                    <User className="w-4 h-4 text-placeholder mr-2" />
                    <span className="text-placeholder">
                      {/* {creator?.firstName} {creator?.lastName} */}
                      John Doe
                    </span>
                  </div>

                  {/* Created Date */}
                  <div className="flex items-center text-small">
                    <Calendar className="w-4 h-4 text-placeholder mr-2" />
                    <span className="text-placeholder">
                      {formatDate(d.createdAt)}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {d.tags?.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-small font-medium bg-primary/10 text-primary"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag.tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}