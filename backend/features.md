The main solution is preventing the users to download the image directly. Instead, we allow the users to share images using “sharing links”, which encode information about the user and about the image he shared .

Users share link to the portal instead of downloading the image directly.
We apply several layers of protection against extracting an image file from the sharing page, for example:
- we are using a deferred-loading technique for the images, so the social platforms are unable to pull the protected image during automated “link preview” extraction attempt performed on the shared link.
- we are applying several tricks that prevent users from using browsers feature to extract the image from the webpage, like preventing drag&drop of the image, right-mouse-clicks on the image, preventing the image from being saved as a plain file (it is loaded as a base64-encoded stream directly inside the html file), etc
- if the user manages to extract the image file somehow, the jpg file contains the metadata (encoded in EXIF) about the identifier of the person who created the sharing link.
- also the image contains barely visible watermarks, containing the id of the user that created a sharing link and the ip address of the person who is viewing the image. This helps to identify the person who violated the no-share policy.

