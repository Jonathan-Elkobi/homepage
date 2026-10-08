# Website analytics

The production website uses Google Analytics 4 with measurement ID
`G-LHL6GHG2EM`. The tag loads once on each page. Development builds do not load
Google Analytics or the custom event script.

## What is measured

Page views, users, sessions, referral sources, and engagement are collected by
the Google tag. The website also sends these events:

| Event | What it measures | Additional details |
| --- | --- | --- |
| `cv_download` | Clicks on the CV PDF from any page | Link location and destination |
| `paper_link_click` | Links clicked inside research papers and homepage paper cards | Paper title, link location, and destination |
| `abstract_open` | First opening of each paper abstract per page load | Paper title |
| `contact_click` | Email and telephone link clicks | Contact method and link location; no email address or phone number |
| `social_profile_click` | Social profile links in the profile icon list and header | Platform, link location, and destination |
| `teaching_resource_click` | External resource links in the Teaching page content | Resource title, link location, and destination |
| `scroll_depth` | First time a scrolling visitor reaches 25%, 50%, 75%, and 100% of a page | Percentage reached |

Download and contact events measure clicks, not completed file transfers or
sent messages. Each scroll threshold is sent once per page load; a visitor who
jumps to the bottom reaches all four thresholds. Custom destination URLs omit
query strings and fragments, and text parameters are limited to 100 characters.

## View the results

1. Sign in to [Google Analytics](https://analytics.google.com/) with an account
   that has access to the website's property.
2. Open **Reports → Engagement → Pages and screens** for page popularity and
   **Reports → Acquisition → Traffic acquisition** for referral sources.
3. Open the **Events** report for counts of the events above. The report's menu
   location can vary with the property's report collection.
4. Use **Reports → Realtime** to verify activity after publishing. Standard
   reports can take 24–48 hours to process new data.

In **Admin → Data collection and modification → Data streams**, select the web
stream and check **Enhanced measurement**. Enable outbound clicks, file
downloads, and scrolls for Google's standard `click`, `file_download`, and
`scroll` events. Those are separate from the academic-specific events above;
do not add the two types together to calculate total clicks or downloads.

To compare individual papers, create event-scoped custom dimensions in
**Admin → Data display → Custom definitions** for `paper_title`,
`link_location`, `contact_method`, `social_platform`, and `resource_title`.
Use these in an **Explore → Free form** report with Event name, Event count,
and Total users. The built-in Percent scrolled dimension describes scroll
thresholds. Optionally mark `cv_download` or `contact_click` as key events to
measure how often visits lead to those actions.

These account settings require access to Google Analytics and are not changed
by editing the website. Collection on the live website starts when the updated
site is deployed; previously untracked visits cannot be recovered.

See Google's documentation on [enhanced measurement](https://support.google.com/analytics/answer/9216061),
[custom event parameters](https://developers.google.com/analytics/devguides/collection/ga4/event-parameters),
and [data freshness](https://support.google.com/analytics/answer/11198161).
