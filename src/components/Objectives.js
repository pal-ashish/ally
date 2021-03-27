import { useEffect, useState } from 'react';
import Objective from './Objective';

//category, parent_objective_id, title, id
function Objectives() {
    const [objectives, setObjectives] = useState(null);

    useEffect(() => {
        fetch('https://okrcentral.github.io/sample-okrs/db.json')
        .then(response => response.json())
        .then(data => storeByCategory(data.data));
    }, []);

    function storeByCategory(objectives) {
        let objectivesByCategory = {};
        objectives.forEach(objective => {
            if (!objectivesByCategory[objective.category]) objectivesByCategory[objective.category] = [];
            objectivesByCategory[objective.category].push(objective);
        });
        console.log(objectivesByCategory);
        setObjectives(objectivesByCategory)
    }

    function renderObjectives() {
        let keys = Object.keys(objectives);
        return keys.map(key => <Objective key={key} objectives={objectives[key]}/>) 
    }

    return (
        <div>
            {objectives && renderObjectives()}
      </div>
    );
}
export default Objectives;