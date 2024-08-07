import { AbilityBuilder, Ability } from '@casl/ability';

export const defineAbilitiesFor = (user) => {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === 'admin') {
    can('manage', 'all');
  } else if (user.role === 'owner') {
    can('read', 'Book', { ownerId: user.id });
    can('update', 'Book', { ownerId: user.id });
    can('delete', 'Book', { ownerId: user.id });
    can('create', 'Book');
  } else {
    can('read', 'Book', { available: true });
  }

  return build();
};
