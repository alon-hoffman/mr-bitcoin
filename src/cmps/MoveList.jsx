// import { MovePreview } from './MovePreview'

export function MoveList({ moves }) {

    return (
        <section className='move-list'>
            <h1>Your Moves</h1>
            {!moves.length && <p>You still haven't moved any Bitcoin</p>}
            {moves.length > 0 && moves.map(move =>
                <div key={move.time}><div> At {new Date(move.time).toLocaleString()}</div>
                    <div> Amount {move.amount}</div>
                    <div> To {move.to.name}</div>
                </div>
            )}
        </section>
    )
}

