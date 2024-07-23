 export const findAstrologyPic = (zodiacSign) => {
    const zodiacSigns = [
        {   
            name: "Aries",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Aries.svg"
        },  
        {   
            name: "Taurus",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Taurus.svg"
        },  
        {   
            name: "Gemini",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Gemini.svg"
        },  
        {   
            name: "Cancer",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Cancer.svg"
        },  
        {   
            name: "Leo",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Leo.svg"
        },  
        {   
            name: "Virgo",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Virgo.svg"
        },  
        {   
            name: "Libra",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Libra.svg"
        },  
        {   
            name: "Scorpio",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/04/USAT/1f3dd28e-0265-4e54-970a-e17a7e5a22ca-Scorpio.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
        },  
        {   
            name: "Sagittarius",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/80/Sagittarius.svg"
        },  
        {   
            name: "Capricorn",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Capricorn.svg"
        },  
        {   
            name: "Aquarius",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Aquarius.svg"
        },
        {
            name: "Pisces",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Pisces.svg"
        }
        ];

        const sign = zodiacSigns.find(sign => sign.name.toLowerCase() === zodiacSign.toLowerCase());
        return sign ? sign.imageUrl : null;


}