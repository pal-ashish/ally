
function Objective({objectives = {}}) {
    
    function toggleKeyResults() {
        
    }

    return (
        <div className="objectives-container">
           { objectives.map(objective => {
               if (objective.parent_objective_id === '') {
                return (
                    <div key={objective.id} className="objective" data-id={objective.id} onClick={toggleKeyResults}> {objective.title} </div>
                )
               }
                return <div key={objective.id} data-parent_id={objective.parent_objective_id} className="key-result"> {objective.title} </div>
            })}
        </div>
    );
}
export default Objective;