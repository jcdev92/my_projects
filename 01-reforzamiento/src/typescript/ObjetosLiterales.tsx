interface Person {
    longName: string;
    age: number;
    address: Address
}

interface Address {
    houseNumber: number;
    street: string;
    country: string;
    city: string;
}

export const ObjetosLiterales = () => {

    const person: Person = {
        longName: 'Fernando Herrera',
        age: 35,
        address: {
            houseNumber: 123,
            street: 'Main St',
            country: 'USA',
            city: 'NY'
        }
    }

    return (
        <>
            <h4>Objetos Literales</h4>
            <br/>
            <code>
                <pre>
                    {
                        JSON.stringify(person, null, 2)
                    }
                </pre>
            </code>
        </>
    )
}