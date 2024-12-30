import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function BlogPost3() {
  const [content, setContent] = useState('');
  const [toc, setToc] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    fetch('/content/blog-post-3.md')
      .then(response => response.text())
      .then(text => {
        setContent(text);
        const headings = text.match(/^##\s.+$/gm);
        if (headings) {
          setToc(headings.map(heading => ({
            id: heading.replace(/##\s/, '').toLowerCase().replace(/\s/g, '-'),
            text: heading.replace(/##\s/, '')
          })));
        }
      })
      .catch(error => console.error('Error loading blog post:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/blog" className="flex items-center text-blue-400 hover:text-blue-300 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Blog
      </Link>
      <article className="bg-slate-800 rounded-lg p-8 shadow-lg">
        <ReactMarkdown 
          children={content} 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-6 text-blue-400" {...props} />,
            h2: ({node, ...props}) => {
              const id = props.children[0].toString().toLowerCase().replace(/\s/g, '-');
              return <h2 id={id} className="text-2xl font-semibold mt-8 mb-4 text-slate-200" {...props} />;
            },
            p: ({node, ...props}) => <div className="mb-4 text-slate-300" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 text-slate-300" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 text-slate-300" {...props} />,
            li: ({node, ...props}) => <li className="mb-2" {...props} />,
            img: ({node, ...props}) => (
              <div className="mb-6">
                <img className="w-full h-auto rounded-lg" {...props} alt={props.alt || ''} />
                {props.alt && <span className="text-sm text-slate-400 mt-2 block text-center">{props.alt}</span>}
              </div>
            ),
            a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300" {...props} />,
          }}
        />
      </article>
      {toc.length > 0 && (
        <div className="mt-8 bg-slate-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-slate-200">Table of Contents</h3>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-400 hover:text-blue-300">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BlogPost3;