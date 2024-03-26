import { useEffect, useState } from "react"

export default function Test() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('component yüklendi!')
        return () => {
            console.log('destroyed')
        }
    }, [])

    useEffect(() => {
        console.log('component render oldu!')
    })

    useEffect(() => {
        console.log('Count değeri değişti = ', count)
    }, [count])
    return (
        <div>
            <h3>{ count }</h3>
            <button className="bg-gray-400 py-2 px-4 rounded" onClick={() => setCount(count => count + 1)}>Artır</button>
            <hr />
            test component
        </div>
    )
}