export const TiposBasicos = () => {

    let name: string = 'Fernando';
    let age: number = 35;
    let isStudent: boolean = true;

    const subjects: string[] = ['Math', 'Physics', 'Chemistry'];

    return (
        <>
            <h4>
                Tipos Basicos <br/>
                {name}, {age}, {isStudent ? ' is student ' : ' is not student '}
                {subjects.join(', ')}
            </h4>
        </>
    );
}