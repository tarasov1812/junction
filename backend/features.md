**The problem:** Design a solution for tracing the images (of kids) that can be "illegally" shared by anyone who has access to the photo portal (parents, teachers, other kids). 

**Main Idea:** we are tracing the user who initially "shares" the image to the wider audience, and that user is the main person responsible for any further leaks into social networks. 
The user is given the choice to be relieved of the responsibility, however, if the photo has a digital consent of all the people represented on the photo (or their legal representatives, like parents) for sharing that image (or all their images) on the social networks. All other people (who didn't give their permission) in such case will be blurred on this specific downloaded photo.

Alternatively, the user can access such photo, generated on the portal using "share link", and he holds responsibility for any further leaks of this picture.
The main solution is preventing the users to download the image directly. Instead, we allow the users to share images using “sharing links”, which encode information about the user and about the image he shared .

Users share link to the portal instead of downloading the image directly.
We apply several layers of protection against extracting an image file from the sharing page, for example:
- we are using a deferred-loading technique for the images, so the social platforms are unable to pull the protected image during automated “link preview” extraction attempt performed on the shared link.
- we are applying several tricks that prevent users from using browsers feature to extract the image from the webpage, like preventing drag&drop of the image, right-mouse-clicks on the image, preventing the image from being saved as a plain file (it is loaded as a base64-encoded stream directly inside the html file), etc
- if the user manages to extract the image file somehow, the jpg file contains the metadata (encoded in EXIF) about the identifier of the person who created the sharing link.
- also the image contains barely visible watermarks, containing the id of the user that created a sharing link and the ip address of the person who is viewing the image. This helps to identify the person who violated the no-share policy.

- sharing identifier contains info about the user that shared the image + info about the desired picture id + secret random salt, and this combo is hashed with something like SHA254 or some other hashing algorithm of reasonable length (so the url doesnt look too large). Shuld we make sure the pic and user ids are NEVER reused? (probably yes) The server itself keeps a map of each generated hash to the userid and imageid, so that it can quickly retrieve them once supplied with a hash value.
```
/share/<sharingidentifier:str>
```

we check the validity of the sharingidentifier, and if it matches an existing user id and picture id, we return the picture preview page, otherwise we return 403

The proposed image protection algorithm can be used not only for the "sharing" page, but also for viewing the pictures in a gallery on the portal.