export const useGetTime = () => {

    let currentTime = new Date().getHours();

    if(currentTime >= 6 && currentTime < 12) return ('Good Morning')
    if(currentTime >= 12 && currentTime < 17) return ('Good Afternoon')
    if(currentTime >= 17 && currentTime < 22) return ('Good Evening')
    return ('Good Night')
}