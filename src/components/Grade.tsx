export default function Grade(props: any){
    return (
        <div className="grid grid-cols-1 w-[90%] mx-auto h-screen justify-center md:w-[90%] md:mx-auto">
            {props.children}
        </div>
    )
}