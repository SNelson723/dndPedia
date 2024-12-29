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

const ClassTab = ({ classInfo, type }) => {

  // console.log(classInfo, type);
  const primaryAbility = skills[classInfo.index];
  // console.log(primaryAbility);

  return (
    <div>
      {type === 'general' ?
        <>
          <Row className='m-3'>
            <Col xs='1' md='1' lg='2' style={{fontWeight: 'bold'}}>Primary Abilities: </Col>
            <Col xs='1' md='2' lg='3'>{primaryAbility}</Col>
          </Row>
          <Row>
            <Col>Hit Point Die: </Col>
          </Row>
        </>
      : null}
      {type === 'proficiency' ? <div>Proficiencies</div> : null}
    </div>
  );
};

export default ClassTab;