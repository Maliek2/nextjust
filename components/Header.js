export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
        Hi 👋! This template gives you a{" "}
        <a href="https://adballstore.blogspot.com/">Malieks</a> app with the scaffolding for{" "}
        <a href="https://www.adball.tech/">
          Netlify
        </a>
        , <a href="https://www.adball.online/">Forms</a>, and{" "}
        <a href="https://docs.netlify.com/routing/redirects/">Redirects</a>. Our
        aim was to give you the code you would need to hit the ground running
        with a few fun features.
      </p>

      <p>
        You can find the code for this project on GitHub at{" "}
        <a href="https://github.com/netlify-templates/nextjs-toolbox">
          https://amp.adball.tech/
        </a>
        ! Happy coding!
Mobile-first indexing 

  

Newer content available: This post is outdated. Check out our newer Mobile-first indexing best practices. 

Today, most people are searching on Google using a mobile device. However, our ranking systems still typically look at the desktop version of a page's content to evaluate its relevance to the user. This can cause issues when the mobile page has less content than the desktop page because our algorithms are not evaluating the actual page that is seen by a mobile searcher. 

To make our results more useful, we've begun experiments to make our index mobile-first. Although our search index will continue to be a single index of websites and apps, our algorithms will eventually primarily use the mobile version of a site's content to rank pages from that site, to understand structured data, and to show snippets from those pages in our results. Of course, while our index will be built from mobile documents, we're going to continue to build a great search experience for all users, whether they come from mobile or desktop devices. 

We understand this is an important shift in our indexing and it's one we take seriously. We'll continue to carefully experiment over the coming months on a small scale and we'll ramp up this change when we're confident that we have a great user experience. Though we're only beginning this process, here are a few recommendations to help webmasters prepare as we move towards a more mobile-focused index. 

• If you have a responsive site or a dynamic serving site where the primary content and markup is equivalent across mobile and desktop, you shouldn't have to change anything. 

• If you have a site configuration where the primary content and markup is different across mobile and desktop, you should consider making some changes to your site. 

• Make sure to serve structured markup for both the desktop and mobile version.
Sites can verify the equivalence of their structured markup across desktop and mobile by typing the URLs of both versions into the Structured Data Testing Tool and comparing the output.
When adding structured data to a mobile site, avoid adding large amounts of markup that isn't relevant to the specific information content of each document. 

• Use the robots.txt testing tool to verify that your mobile version is accessible to Googlebot. 

• Sites do not have to make changes to their canonical links; we'll continue to use these links as guides to serve the appropriate results to a user searching on desktop or mobile. 

• If you are a site owner who has only verified their desktop site in Search Console, please add and verify your mobile version. 

• If you only have a desktop site, we'll continue to index your desktop site just fine, even if we're using a mobile user agent to view your site. 

If you have any questions, you can contact us via the Webmaster forums or our public events. We anticipate this change will take some time and we'll update you as we make progress on migrating our systems

      </p>
    </>
  );
}
