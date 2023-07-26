import React from 'react'

const SpellsLayout = (props) => {


	useEffect(() => {
		async function getMagicData() {
			const q = doc(db, "ContentSpells", props.treeName)
				const querySnapshot = await getDoc(q);
				const docData = querySnapshot.data();
				const spellsArray = []
				docData.SpellNames.forEach((spell) => 
				{

					var thisSpell = spell;
					var storeSpell = docData.$[thisSpell];

				}
				)

		}
	getMagicData();
	},[]);
	return (
		<div>SpellsLayout</div>
	)
}

export default SpellsLayout