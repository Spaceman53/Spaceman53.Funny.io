
var x = 1;

var ImageGallery = document.getElementById("img");

function images(x){
    if(x == 1)
    {
        ImageGallery.src = "https://m.media-amazon.com/images/I/71ZE-ISEadL._AC_UF1000,1000_QL80_.jpg";
        //https://m.media-amazon.com/images/I/71ZE-ISEadL._AC_UF1000,1000_QL80_.jpg
    }
    if(x == 2)
    {
        ImageGallery.src = "https://img.huffingtonpost.com/asset/5d02d614210000dc18f2057a.jpeg?ops=scalefit_720_noupscale";
        //https://img.huffingtonpost.com/asset/5d02d614210000dc18f2057a.jpeg?ops=scalefit_720_noupscale
    }
    if(x == 3)
    {
        ImageGallery.src = "https://i.ytimg.com/vi/u4aN5ndPTHw/hqdefault.jpg";
        //https://i.ytimg.com/vi/u4aN5ndPTHw/hqdefault.jpg
    }
    if(x == 4)
    {
        ImageGallery.src = "https://i.ytimg.com/vi/dAkcva6XIsQ/maxresdefault.jpg";
        //https://i.ytimg.com/vi/dAkcva6XIsQ/maxresdefault.jpg
    }
    if(x == 5)
    {
        ImageGallery.src = "https://i.kym-cdn.com/entries/icons/original/000/036/317/Screen_Shot_2021-01-18_at_1.13.24_PM.png";
        //https://i.kym-cdn.com/entries/icons/original/000/036/317/Screen_Shot_2021-01-18_at_1.13.24_PM.png
    }
    if(x == 6)
    {
        ImageGallery.src = "https://i.kym-cdn.com/entries/icons/original/000/035/146/knight.jpg";
        //https://i.kym-cdn.com/entries/icons/original/000/035/146/knight.jpg
    }
    if(x == 7)
    {
        ImageGallery.src = "https://media.istockphoto.com/id/1177448789/photo/adorable-cow-on-field-looking-with-interest-into-camera.jpg?s=612x612&w=0&k=20&c=CqFxbY0NmWgrXZPfBeHLFPH5mNlL2PM96BFKviKtw6E=";
        //https://media.istockphoto.com/id/1177448789/photo/adorable-cow-on-field-looking-with-interest-into-camera.jpg?s=612x612&w=0&k=20&c=CqFxbY0NmWgrXZPfBeHLFPH5mNlL2PM96BFKviKtw6E=
    }
    if(x == 8)
    {
        ImageGallery.src = "https://i2-prod.mirror.co.uk/incoming/article27598932.ece/ALTERNATES/n615/1_SWNS_SURPRISED_DOG_008.jpg";
        //https://i2-prod.mirror.co.uk/incoming/article27598932.ece/ALTERNATES/n615/1_SWNS_SURPRISED_DOG_008.jpg
    }
    else
    return 0;
}
        function right(){
            x += 1;
            if(x == 9)
            {
                x -= 8;
                console.log(x);
                images(x);
            }
            else 
            {
                console.log(x);
                images(x);
            }
            return x;
        }

        function left() {
            x -= 1;
            if(x == 0)
            {
                x += 8;
                console.log(x);
                images(x);
            }
            else
            {
                console.log(x);
                images(x);
            }
            return x;
        }

function EndProgram()
{
    if(confirm("Are your sure you want to exit?")) {
        close();
    }
}
