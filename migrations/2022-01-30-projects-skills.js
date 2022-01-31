export
async function up(queryInterface, { DataTypes }) {
  await queryInterface.createTable('projects', {
    id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: { type: DataTypes.BIGINT(20).UNSIGNED },
    name: { type: DataTypes.STRING(255), allowNull: false },
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE },
    deleted_at: { type: DataTypes.DATE },
    created_by: { type: DataTypes.BIGINT(20).UNSIGNED, allowNull: true },
  });
  await queryInterface.createTable('skills', {
    id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: DataTypes.STRING(255), allowNull: false }
  });
  await queryInterface.createTable('users_details', {
    user_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true,
      unique: true
    },
    position: { type: DataTypes.STRING(255), allowNull: false },
    salary: { type: DataTypes.STRING(255), allowNull: false },
    english_level: { type: DataTypes.STRING(255), allowNull: false },
  });
  await queryInterface.createTable('users_ref_skills', {
    user_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true
    },
    skill_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true
    },
    years: { type: DataTypes.INTEGER.UNSIGNED }
  });
  await queryInterface.createTable('projects_refs_skills', {
    project_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true
    },
    skill_id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true
    },
    years: { type: DataTypes.INTEGER.UNSIGNED }
  });

  await queryInterface.addConstraint('projects', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'projects_ref_users',
    references: { table: 'users', field: 'id' },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  await queryInterface.addConstraint('projects', {
    fields: ['created_by'],
    type: 'foreign key',
    name: 'projects_ref_users_2',
    references: { table: 'users', field: 'id' },
    onDelete: 'set null',
    onUpdate: 'restrict'
  });
  await queryInterface.addConstraint('users_details', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'users_details_ref_users',
    references: { table: 'users', field: 'id' },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  await queryInterface.addConstraint('users_ref_skills', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'users_ref_skills_users',
    references: { table: 'users', field: 'id' },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  await queryInterface.addConstraint('users_ref_skills', {
    fields: ['skill_id'],
    type: 'foreign key',
    name: 'users_ref_skills_skills',
    references: { table: 'skills', field: 'id' },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  await queryInterface.addConstraint('projects_refs_skills', {
    fields: ['project_id'],
    type: 'foreign key',
    name: 'projects_refs_skills_projects',
    references: { table: 'projects', field: 'id' },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  await queryInterface.addConstraint('projects_refs_skills', {
    fields: ['skill_id'],
    type: 'foreign key',
    name: 'projects_refs_skills_skills',
    references: { table: 'skills', field: 'id' },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
}

export
async function down(queryInterface) {
  await queryInterface.dropTable('projects_refs_skills');
  await queryInterface.dropTable('users_ref_skills');
  await queryInterface.dropTable('users_details');
  await queryInterface.dropTable('skills');
  await queryInterface.dropTable('projects');
}
