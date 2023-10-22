import flask
from flask import Flask, request, render_template
from PIL import Image, ImageDraw, ImageFont
import io, random, piexif, piexif.helper
import base64

shareBlueprint = flask.Blueprint("share", "share")

# accepts PIL image and returns a PIL image
def drawWatermarkOnImage(image, pos, text):
    image = image.convert('RGBA')
    textlayer = Image.new('RGBA', image.size, (255, 255, 255, 0))

    # Create a copy of the image to add the watermark
    watermarked_image = image.copy()

    # Load a font and set the text to be displayed as the watermark
    font = ImageFont.truetype('Arial.ttf', 24)  # Use the path to your desired font

    # Create a draw object to add the text to the image
    draw = ImageDraw.Draw(textlayer)
    draw.text(pos, text, font=font, fill=(255, 255, 255, 20))

    #textlayer = textlayer.rotate(45, expand=False)

    combined_image = Image.alpha_composite(watermarked_image, textlayer)
    combined_image = combined_image.convert("RGB")

    return combined_image

@shareBlueprint.post('/watermark')
def add_watermark():
    # Get the uploaded image
    image_file = request.files['image']

    image = Image.open(image_file)


    for i in range(5):
        for j in range(5):
            if bool(random.getrandbits(1)):
                image = drawWatermarkOnImage(image, (i*(image.width/5), j*image.height/5), "Bad user")



    # Save the watermarked image


    output = io.BytesIO()
    exif_ifd = {#piexif.ExifIFD.MakerNote: 'A very bad user'.encode("utf-8"),
                piexif.ExifIFD.UserComment: piexif.helper.UserComment.dump(u"Bad users comment!")
                }

    exif_dict = {"0th": {}, "Exif": exif_ifd, "1st": {},
                 "thumbnail": None, "GPS": {}}


    image.save(output, format='JPEG', exif=piexif.dump(exif_dict))

    output.seek(0)

    import base64

    #print(output.getvalue()[1])
    #print(base64.b64encode(output.getvalue()))
    base64image = base64.b64encode(output.getvalue())
    print(base64image)
    return render_template("sharing_page.html", image_base64=base64image.decode('utf-8'), userid="BadUser")

# identifier contains info about the user that shared the image + info about the desired picture id + secret constant salt, and this combo is hashed with something like SHA254 or some other of reasonable length (so url doesnt look too large).
# security warning: make sure the pic and user ids are NEVER reused!
@shareBlueprint.get('/share/<sharingidentifier>')
def render_preview(sharingidentifier):
    # Get the uploaded image

    image = Image.open("imagestorage/testimage.jpg")


    for i in range(5):
        for j in range(5):
            if bool(random.getrandbits(1)):
                text = "Bad user"
                if bool(random.getrandbits(1)):
                    text = str(request.remote_addr)
                image = drawWatermarkOnImage(image, (i*(image.width/5), j*image.height/5), text)



    # Save the watermarked image


    output = io.BytesIO()
    exif_ifd = {#piexif.ExifIFD.MakerNote: 'A very bad user'.encode("utf-8"),
                piexif.ExifIFD.UserComment: piexif.helper.UserComment.dump(u"Bad users comment!")
                }

    exif_dict = {"0th": {}, "Exif": exif_ifd, "1st": {},
                 "thumbnail": None, "GPS": {}}


    image.save(output, format='JPEG', exif=piexif.dump(exif_dict))

    output.seek(0)


    base64image = base64.b64encode(output.getvalue())
    return render_template("sharing_page.html", image_base64=base64image.decode('utf-8'), userid="BadUser")



@shareBlueprint.get('/watermark')
def watermark_get():
    return render_template("upload_page.html")