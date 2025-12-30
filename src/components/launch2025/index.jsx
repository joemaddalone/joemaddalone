import './index.css';
import './newspaper.css';
import { cn } from '../../lib/utils';


const Launch2025 = ({ children }) => {
	const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

	return (
		<main className="newspaper-theme min-h-screen p-4 md:p-8">
			<header className="newspaper-header">
				<h1>The Daily Joe</h1>
				<div className="newspaper-date">
					<span>Vol. 1, No. 1</span>
					<span>{currentDate}</span>
					<span>$1.00</span>
				</div>
			</header>

			<section
				className={cn(
					'mx-auto grid min-w-xs gap-4',
					'max-w-sm grid-cols-1 [grid-template-areas:"intro""blog""e""d""g""f""j""i""k"]',
					'sm:max-w-2xl sm:grid-cols-2 sm:[grid-template-areas:"intro_intro""blog_d""e_e""j_g""h_i""h_c""k_c""f_f"]',
					'lg:max-w-5xl lg:grid-cols-3 lg:[grid-template-areas:"intro_intro_blog""d_e_e""h_f_f""h_i_g""k_c_j"]',
					'xl:max-w-7xl xl:grid-cols-4 xl:[grid-template-areas:"intro_intro_blog_c""d_e_e_c""h_f_f_g""h_i_j_k"]',
				)}
			>

				{/* intro - Lead Story */}
				<article className="[grid-area:intro] newspaper-border p-4 bg-white">
					<div className="lead-story">
						<h2 className="headline-large">Software Engineer Builds Cool Stuff</h2>
						<div className="lead-text">
							<p className="font-bold mb-2">DATELINE: INTERNET —</p>
							<p>
								"Hi, I'm Joe Maddalone." These simple words launched a thousand commits.
								Experts say software engineering revolutionizes how we view everything.
								"It does not seem to be slowing at all," remarked one observer.
							</p>
							<p className="mt-4">
								In other news, the grid continues to adapt perfectly to all screen sizes,
								proving that responsive design is indeed here to stay.
							</p>
						</div>
					</div>
				</article>

				{/* blog - Latest News */}
				<aside className="[grid-area:blog] newspaper-border p-4 bg-white flex flex-col">
					<h3 className="border-b-2 border-black font-bold mb-2 text-xl">Latest News</h3>
					<div className="flex-grow flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
						<a href="https://el337.com" target="_blank" rel="noopener noreferrer" className="text-center group">
							<h4 className="font-serif text-2xl mb-2 group-hover:underline">Read The Blog</h4>
							<p className="text-sm text-gray-600">Fresh insights daily.</p>
						</a>
					</div>
				</aside>

				{/* c - Ad Spacer */}
				<div className="hidden [grid-area:c] sm:block sm:aspect-[1/2] lg:aspect-square xl:aspect-[1/2] p-2">
					<div className="ad-box">
						<div className="ad-text">
							<p className="uppercase text-xs font-bold mb-1">Ad Space</p>
							<p className="text-lg">Your Ad Here</p>
							<p className="text-xs mt-1">Call 555-CODE</p>
						</div>
					</div>
				</div>

				{/* d - Projects / Feature */}
				{/* d - Projects / Feature -> Show Times */}
				<div className="[grid-area:d] newspaper-border p-2 bg-white">
					<div className="listing-section">
						<div className="listing-header">
							Project Show Times
						</div>
						<div className="listing-content">
							<a href="https://joemaddalone.github.io/react-svg-path-docs/#/" className="listing-item group">
								<span className="listing-title">react-svg-path</span>
								<span className="listing-dots"></span>
								<span className="listing-value">TypeScript/React</span>
							</a>
							<a href="https://2019.reactloop.com" className="listing-item group">
								<span className="listing-title">ReactLoop</span>
								<span className="listing-dots"></span>
								<span className="listing-value">Conference/Organizer</span>
							</a>
							<a href="https://github.com/joemaddalone/vogon" className="listing-item group">
								<span className="listing-title">vogon</span>
								<span className="listing-dots"></span>
								<span className="listing-value">Next/Typescript</span>
							</a>
							<a href="https://github.com/joemaddalone/path" className="listing-item group">
								<span className="listing-title">path</span>
								<span className="listing-dots"></span>
								<span className="listing-value">Typescript/SVG</span>
							</a>
							<a href="#" className="listing-item group">
								<span className="listing-title">NWCJS (hiatus)</span>
								<span className="listing-dots"></span>
								<span className="listing-value">Meetup/Organizer</span>
							</a>
							{/* <div className="mt-2 text-center text-xs italic border-t border-gray-300 pt-1">
								<a href="/custom-work" className="underline hover:decoration-2">View Full Schedule</a>
							</div> */}
						</div>
					</div>
				</div>

				{/* e - Github / Market Data */}
				<div className="[grid-area:e] newspaper-border p-2 bg-white">
					<div className="market-section">
						<div className="market-header">
							<span>Market Data</span>
							<span>GITHUB: JM</span>
						</div>
						<div className="flex-grow flex items-center justify-center relative overflow-hidden mt-2">
							<div className="opacity-80 scale-90 origin-top">
								<img src="https://github-readme-stats.vercel.app/api?username=joemaddalone&show_icons=true&count_private=true&show=prs_merged,prs_merged_percentage&hide=contribs" alt="" />
							</div>
						</div>
					</div>
				</div>

				{/* f - Youtube / Cinema */}
				<div className="[grid-area:f] newspaper-border border-4 border-double border-black">
					<div className="cinema-section cursor-pointer group">
						<div className="market-header">
							<span>Now Playing</span>
							<span>By Joe Maddalone</span>
						</div>
						{children}
					</div>
				</div>

				{/* g - Resume / Classifieds */}
				<div className="[grid-area:g] newspaper-border p-3 bg-white">
					<div className="classifieds-section">
						<h3 className="text-center font-bold border-b border-black mb-2">CLASSIFIEDS</h3>
						<div className="classified-item">
							<p className="classified-title">DEVELOPER FOR HIRE</p>
							<p>Experienced full-stack eng. Will code for food. <a href="/resume" className="underline">View Resume</a>.</p>
						</div>
						<div className="classified-item">
							<p className="classified-title">LOST CAT</p>
							<p>Answers to "Sudo". Reward.</p>
						</div>
						<div className="classified-item flex-grow flex items-end justify-center">
							<a href="/resume" className="font-bold underline">More About Joe</a>
						</div>
					</div>
				</div>

				{/* h - Ad */}
				<div className="hidden [grid-area:h] sm:block sm:aspect-[1/2] p-2">
					<div className="weather-widget bg-white">
						<span className="lucide-sun text-4xl mb-2">☀</span>
						<span className="font-bold text-xl">72°F</span>
						<span className="text-xs uppercase">Sunny in Codeville</span>
					</div>
				</div>

				{/* i - Social: Github */}
				<div className="[grid-area:i] newspaper-border p-2 bg-white flex items-center justify-center">
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/joemaddalone" className="flex flex-col items-center group">
						<span className="text-3xl mb-1 group-hover:scale-110 transition-transform font-serif font-bold">
							GH
						</span>
						<span className="font-sans text-xs font-bold uppercase">Github</span>
					</a>
				</div>

				<div className="[grid-area:j] newspaper-border p-4 bg-white flex flex-col items-center justify-center text-center">
					<h4 className="font-bold uppercase text-sm mb-2">Subscribe</h4>
					<p className="text-xs mb-2">Get the daily edition delivered.</p>
					<button className="bg-black text-white text-xs px-2 py-1 hover:bg-gray-800">Sign Up</button>
				</div>

				{/* k - Social: Twitter */}
				<div className="[grid-area:k] newspaper-border p-2 bg-white flex items-center justify-center">
					<a target="_blank" rel="noopener noreferrer" href="https://x.com/joemaddalone" className="flex flex-col items-center group">
						<span className="text-3xl mb-1 group-hover:scale-110 transition-transform font-serif font-bold">
							X
						</span>
						<span className="font-sans text-xs font-bold uppercase">Twitter</span>
					</a>
				</div>
			</section>
		</main >
	);
};

export default Launch2025;
