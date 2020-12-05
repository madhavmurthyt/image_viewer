var Config =
{
    "login": {
        "username": "admin",
        "password": "admin"
    },
    "auth": {
        "access-token": "IGQVJYaFZA5WGpsNWtUeTJjc1o0Q3o5dDBjVF92Nl9qQmdGT3VDTlIwRWtlRWpoLS1wQTl6VG1GOTlHN3lCdHdZAZAkE0QzdPMnRtT21RVVBkYWpCdlFPN3U3YkthRnpDMnNQU2VibFBR"
    },
    "api": 
    {
        "mock": false,
        "endpoints": 
        [
            {
                "name": "Get Posts",
                "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
            },
            {
                "name": "Get Post Details",
                "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
            }
        ]
    }
};
export default Config;