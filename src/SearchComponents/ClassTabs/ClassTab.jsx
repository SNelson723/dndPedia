const ClassTab = ({ classInfo, type }) => {

  // console.log(classInfo, type);

  return (
    <div>
      {type === 'general' ? <div>General</div> : null}
      {type === 'proficiency' ? <div>Proficiencies</div> : null}
    </div>
  );
};

export default ClassTab;