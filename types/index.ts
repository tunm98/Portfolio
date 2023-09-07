export type SkillsType = {
  _id: string;
  skills: skill[];
};

interface skill {
  skillName: string;
  skillIcon: string;
}
