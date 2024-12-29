const skills = {
  barbarian: 'Strength',
  bard: 'Charisma',
  cleric: 'Wisdom',
  druid: 'Wisdom',
  fighter: 'Strength or Dexterity',
  monk: 'Dexterity & Wisdom',
  paladin: 'Strength & Wisdom',
  ranger: 'Dexterity & Wisdom',
  
};

const ClassTab = ({ classInfo, type }) => {

  // console.log(classInfo, type);
  const primaryAbility = skills[classInfo.index];
  console.log(primaryAbility);

  return (
    <div>
      {type === 'general' ? <div>General</div> : null}
      {type === 'proficiency' ? <div>Proficiencies</div> : null}
    </div>
  );
};

export default ClassTab;