export const changeLog = [
    {
        date: '11/02/17',
        body: [
            'FREE KEYS! The "open" API is finally open again!'
        ]
    },
    {
        date: '08/20/17',
        body: [
            'I created a GitHub repository for tracking bugs.'
        ]
    },
    {
        date: '05/10/17',
        body: [
            'Due to some security concerns on how the keys were being distributed I updated the form to email them and also changed the algorithm used, which means your older keys not obtained through email will eventually stop working.'
        ]
    },
    {
        date: '01/12/17',
        body: [
            'Removed single character restriction from title/search results.'
        ]
    },
    {
        date: '06/11/16',
        body: [
            '"totalSeasons" count has been added to series results.'
        ]
    },
    {
        date: '1/20/16',
        body: [
            'To accommodate search paging "totalResults" is now returned at the root level.'
        ]
    },
    {
        date: '12/12/15',
        body: [
            'Search pagination added: http://www.omdbapi.com/?s=Batman&page=2'
        ]
    },
    {
        date: '11/16/15',
        body: [
            'Season+Episode now works with "i" parameter: http://www.omdbapi.com/?i=tt0944947&Season=1',
            'Fixed the max pool size connection issues.'
        ]
    },
    {
        date: '10/18/15',
        body: [
            'You can now return all episodes by using just the "Season" parameter: http://www.omdbapi.com/?t=Game of Thrones&Season=1'
        ]
    },
    {
        date: '9/9/15',
        body: [
            'New server is up, response times should be < 500ms.',
            'Setup a CDN/Caching service with CloudFlare'
        ]
    },
    {
        date: '8/15/15',
        body: [
            'Created and Fixed a bad parsing error with JSON response. -Sorry about that!',
            'HTTPS (with TLS) is now active: https://www.omdbapi.com/'
        ]
    },
    {
        date: '5/10/15',
        body: [
            'Season+Episode search parameters added: http://www.omdbapi.com/?t=Game of Thrones&Season=1&Episode=1'
        ]
    },
    {
        date: '5/2/15',
        body: [
            'Poster API: Enabled client side caching.',
            'Database normalization.'
        ]
    },
    {
        date: '3/27/15',
        body: [
            'Corrected JSON/JSONP response types per RFC standards.',
            'Changed Caching-control to Public.'
        ]
    },
    {
        date: '3/15/15',
        body: [
            'Episodes will now return Season/Episode/SeriesID.'
        ]
    },
    {
        date: '3/8/15',
        body: [
            'New caching system in place, response times should be much better.',
            'Set a max limit of 20 concurrent connections, if you get 403 errors you may need to delay your responses a bit.'
        ]
    },
    {
        date: '2/15/15',
        body: [
            'Poster API: Now returns 404 error if poster not found.'
        ]
    },
    {
        date: '1/1/15',
        body: [
            'You can now search by type! (movie, series, episode etc.)',
            'Dupes have been removed from database.',
            'Poster API images updated.'
        ]
    },
    {
        date: '11/1/14',
        body: [
            'New site layout!',
            'Poster API still undergoing stress tests by donors.',
            'Fixed some issues causing invalid JSON/XML due to non escaped quotes.'
        ]
    },
];