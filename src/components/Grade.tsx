export default function Grade(props: any){
    return (
        <div className="flex flex-col w-[90%] h-full my-6 mx-auto">
            {props.children}
        </div>
    )
}