$(document).ready(function(){

    var API_KEY = "YOUR_API_KEY_HERE" // You can generate your own API key by visiting https://console.cloud.google.com/apis/credentials

    var video = ""
    var thumbnail = ""

    $("#form").submit(function (event){
        event.preventDefault()
        var search = $("#search").val()
        videoSearch(API_KEY,search,1)
    })

    $("#form-3").submit(function (event){
        event.preventDefault()
        var search = $("#search-3").val()
        videoSearch(API_KEY,search,1)
    })

    function videoSearch(key,search,maxResults){

        $("#videos").empty()
        $("#thumbnail").empty()


        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key + "&type=video&part=snippet&maxResults="+ maxResults +"&q=" + search, function(data){
            console.log(data)

            data.items.forEach(items => {
                video = `
                
                <iframe width="500" height = "281" src= "https://www.youtube.com/embed/${items.id.videoId}" frameborder="0" allowfullscreen></iframe>
                
                `;

                var thumbnailWidth = (window.innerWidth < 450) ? 180 : 500;
                var thumbnailHeight = (window.innerWidth < 450) ? 130 : 281;

                thumbnail = `
                    <img src="https://i.ytimg.com/vi/${items.id.videoId}/maxresdefault.jpg" width="${thumbnailWidth}px" height="${thumbnailHeight}"/>
                `;

                $('#videos').append(video)
                $('#thumbnail').append(thumbnail)
            });
        })
    }
})