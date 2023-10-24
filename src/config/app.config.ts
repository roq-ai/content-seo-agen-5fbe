interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'SEO Specialist', 'Content Writer'],
  tenantName: 'Client',
  applicationName: 'content seo agency ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read content', 'Read client information', 'View SEO analysis', 'View activity log'],
  ownerAbilities: ['Manage users', 'Manage clients', 'Manage content', 'Manage SEO analysis'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c78b0396-c52e-463a-8744-d45e8d58244e',
};
