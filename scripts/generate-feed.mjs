// Generate or validate metadata-only RSS from the existing public indexes.
import fs from 'node:fs';
function generate(a,q){
 const root="https://s99lab.github.io/alise-article-index/";
 const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
 const records=[...a.articles,...a.guides], urls=records.map(x=>x.url), qu=q.items.map(x=>x.source_url);
 if(!records.length||new Set(urls).size!==urls.length||new Set(qu).size!==qu.length||urls.length!==qu.length||urls.some(x=>!qu.includes(x)))throw Error("Article/question source URL mismatch");
 for(const p of records){if(!p.title||!/^https:\/\/note\.com\/alise_s99lab\/n\/[a-z0-9]+$/.test(p.url)||!/^\d{4}-\d{2}-\d{2}$/.test(p.published)||!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(p.time_jst)||!Number.isFinite(Date.parse(p.published+"T"+p.time_jst+":00+09:00")))throw Error("Invalid public record");}
 records.sort((x,y)=>(y.published+y.time_jst).localeCompare(x.published+x.time_jst)||x.url.localeCompare(y.url));
 return '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>\n<title>A_L_I_S_E — Public article updates</title>\n<link>'+root+'</link>\n<description>A_L_I_S_Eの公開記事索引。Original Japanese note articles; metadata only, not full text or validated research findings.</description>\n<language>ja</language>\n<atom:link href="'+root+'feed.xml" rel="self" type="application/rss+xml"/>\n'+records.map(p=>'<item><title>'+esc(p.title)+'</title><link>'+esc(p.url)+'</link><guid isPermaLink="true">'+esc(p.url)+'</guid><pubDate>'+new Date(p.published+"T"+p.time_jst+":00+09:00").toUTCString()+'</pubDate><category>'+esc(p.type||p.kind)+'</category><description>'+esc(p.published+" JST | "+(p.type||p.kind).toUpperCase()+(p.number?" #"+p.number:"")+" | 原文 / Original note article")+'</description></item>').join('\n')+'\n</channel></rss>\n';
}
const xml=generate(JSON.parse(fs.readFileSync('data/articles.json','utf8')),JSON.parse(fs.readFileSync('data/questions.json','utf8')));
if(process.argv.includes('--write'))fs.writeFileSync('feed.xml',xml);else if(fs.readFileSync('feed.xml','utf8')!==xml)throw Error('Feed stale; regenerate with --write');
console.log('A_L_I_S_E feed matches public registries');
