 export const findAstrologyPic = (zodiacSign) => {
    const zodiacSigns = [
        {   
            name: "Aries",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/05/USAT/9466cf20-57a9-4c03-9910-874faa7d459d-Aries.jpg?crop=1758,1319,x0,y264"
        },  
        {   
            name: "Taurus",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/06/USAT/0b778539-2377-4257-8611-641aeb71f27b-Taurus.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
        },  
        {   
            name: "Gemini",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/07/USAT/82b83b8c-1b0b-4655-93ce-d2016c4bd70a-Gemini.jpg?crop=1758,2344,x0,y148"
        },  
        {   
            name: "Cancer",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/06/USAT/fd94e5d0-a585-4f27-a3b7-3f1a2553555e-Cancer.jpg?crop=1758,1319,x0,y264"
        },  
        {   
            name: "Leo",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/11/USAT/92784ead-4214-42cc-a326-df3e2eba4d5c-Leo.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
        },  
        {   
            name: "Virgo",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/13/USAT/658444cd-e5d6-4ebb-891a-a46223e7c465-Virgo.jpg?crop=1758,2344,x0,y148"
        },  
        {   
            name: "Libra",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/04/USAT/ed03682a-2b5d-4885-95d5-322fd9a2df62-Libra.jpg?crop=1758,2344,x0,y264"
        },  
        {   
            name: "Scorpio",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/04/USAT/1f3dd28e-0265-4e54-970a-e17a7e5a22ca-Scorpio.jpg?crop=1758,1319,x0,y264"
        },  
        {   
            name: "Sagittarius",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/04/USAT/1f3a896f-7c0d-4fc3-a395-a605d47296ba-Sagittarius.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
        },  
        {   
            name: "Capricorn",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/04/USAT/39a515e9-ae69-4cc8-838f-0aa0e84c17f5-Capricorn.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
        },  
        {   
            name: "Aquarius",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/10/USAT/32b646f3-6c54-4f2a-9c7d-7af2549ea8bd-Aquarius.jpg?crop=1758,1319,x0,y659"
        },
        {
            name: "Pisces",
            imageUrl: "https://www.usatoday.com/gcdn/presto/2022/10/10/USAT/4a92642d-bd69-4842-99a5-1fa58597cc7a-Pisces.jpg?crop=1758,2344,x0,y148"
        }
        ];

        const sign = zodiacSigns.find(sign => sign.name.toLowerCase() === zodiacSign.toLowerCase());
        return sign ? sign.imageUrl : null;


}