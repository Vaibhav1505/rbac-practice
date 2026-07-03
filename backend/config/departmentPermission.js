const departmentPermissions = {
  admin: [
    'leads',
    'deals',
    'campaigns',
    'email_templates',
    'settings',
    'users',
  ],
  sales: ['leads', 'deals'],
  marketing: ['campaigns', 'email_templates'],
  it: ['settings'],
};

module.exports = departmentPermissions;
