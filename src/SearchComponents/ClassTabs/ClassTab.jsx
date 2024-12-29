import { Row, Col } from 'react-bootstrap';

const skills = {
  barbarian: 'Strength',
  bard: 'Charisma',
  cleric: 'Wisdom',
  druid: 'Wisdom',
  fighter: 'Strength or Dexterity',
  monk: 'Dexterity & Wisdom',
  paladin: 'Strength & Wisdom',
  ranger: 'Dexterity & Wisdom',
  roque: 'Dexterity',
  sorcerer: 'Charisma',
  warlock: 'Charisma',
  wizard: 'Intelligence'
};

const abilities = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma'

};

const ClassTab = ({ classInfo, type }) => {

  // console.log(classInfo, type);
  const primaryAbility = skills[classInfo.index];
  let savingThrows;

  if (classInfo.saving_throws) {
    savingThrows = classInfo.saving_throws.map(obj => abilities[obj.index]).join(' and ');
  }

  return (
    <div>
      {type === 'general' ?
        <>
          <Row className='mx-3 py-1 border border-info'>
            <Col xs='1' md='1' lg='2' style={{fontWeight: 'bold'}}>Primary Abilities: </Col>
            <Col xs='1' md='2' lg='3'>{primaryAbility}</Col>
          </Row>
          <Row className='mx-3 py-1 border border-info' >
            <Col xs='1' md='1' lg='2' style={{fontWeight: 'bold'}}>Hit Point Die: </Col>
            <Col xs='1' md='2' lg='3'>D{classInfo.hit_die} per {classInfo.name} level</Col>
          </Row>
          <Row className='mx-3 py-1 border border-info' >
            <Col xs='1' md='1' lg='2' style={{fontWeight: 'bold'}}>Saving Throw Proficiencies: </Col>
            <Col xs='1' md='2' lg='3' className='my-auto'>{savingThrows}</Col>
          </Row>
        </>
      : null}
      {type === 'proficiency' ? <div>Proficiencies</div> : null}
    </div>
  );
};

export default ClassTab;