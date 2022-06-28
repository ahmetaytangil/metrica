import {makeId} from "../../../../utils/helpers";


const Error = ({error}) => {
    if (error.constructor === Array) {
        return (
            <>
                {error.map(itm => (
                    <p
                        key={makeId()}
                        style={{
                            textAlign: 'center',
                            margin: 10,
                            color: 'red'
                        }}
                    >
                        {itm} <br/>
                    </p>
                ))}
            </>
        )
    }

    return error.length > 0 ? (
        <p
            style={{
                textAlign: 'center',
                margin: 10,
                color: 'red'
            }}
        >
            {error}
        </p>
    ) : null
};

export default Error;