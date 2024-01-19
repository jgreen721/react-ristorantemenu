import  {useState, useEffect} from "react"



export const useObserver = ref =>{
    const [isVisible,setIsVisible] = useState(false);

    const observer = new IntersectionObserver(([entry])=>{
        // console.log(entry)
        if(entry.isIntersecting){
            // console.log('element is visible')
            setIsVisible(true);
           observer.unobserve(entry.target)
        }
      
    },{threshold:.2})


    useEffect(()=>{
        if(ref.current){
            observer.observe(ref.current)
            // console.log(ref.current)

        }
       

        return ()=> {
            if(ref.current){
             observer.unobserve(ref.current);
            }
            console.log("clean up!!")
        }
    })

    return {isVisible}
}