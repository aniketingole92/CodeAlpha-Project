document.addEventListener('DOMContentLoaded', () => {
    const facebookFeed = document.getElementById('facebook-feed .feed-content');
    const twitterFeed = document.getElementById('twitter-feed .feed-content');
    const instagramFeed = document.getElementById('instagram-feed .feed-content');

    // Mock data for feeds
    const facebookPosts = [
        "User A: Had an amazing day at the park!",
        "User B: Check out this delicious recipe I found.",
        "User C: Just finished reading an incredible book!"
    ];

    const twitterPosts = [
        "Tweet 1: Learning JavaScript is fun!",
        "Tweet 2: Breaking news: JavaScript takes over the world.",
        "Tweet 3: Follow me for more tech tips."
    ];

    const instagramPosts = [
        "Photo 1: Beautiful sunset at the beach.",
        "Photo 2: My cat looking adorable as always!",
        "Photo 3: Look at this amazing artwork!"
    ];

    // Populate feeds with mock data
    const populateFeed = (feedElement, posts) => {
        posts.forEach(post => {
            const p = document.createElement('p');
            p.textContent = post;
            feedElement.appendChild(p);
        });
    };

    populateFeed(facebookFeed, facebookPosts);
    populateFeed(twitterFeed, twitterPosts);
    populateFeed(instagramFeed, instagramPosts);
});
