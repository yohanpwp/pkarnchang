export default function Checkbox ({text, isChecked}) {
    return (
        
        <div className="h1">
            { text }
            {isChecked ? ' is done' : ' is in progress'}
        </div>
        
        
    )
}