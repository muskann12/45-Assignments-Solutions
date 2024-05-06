//QUESTION 45

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function  create_car  (manufacture: string, model: string, optional: Record<string, any> ): car {
    return {
        manufacture,
        model,
        ...optional
    }
}
const mycar: car = create_car("KIA" , "Toyota" ,{color: "white" , year: "2023"})
console.log(mycar);