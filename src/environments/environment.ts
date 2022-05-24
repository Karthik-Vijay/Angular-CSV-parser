const baseUrl = '/api/msp/business-banking';

export const environment = {
  production: false,
  downloadAuditTrailsUrl: `${baseUrl}/downloads`,
  // Download Format Values
  downloadFormat_CSV: 'CSV_EXPORT',
  allowedSearchChars:
    // eslint-disable-next-line no-control-regex
    /[\u0000-\u003B\u003D\u003F-\u005A\u005C\u005E-\u02FF\u0370-\u04FF\u1E00-\u20CF\u2100-\u23FF\u2500-\u26FF\uE000-\uF8FF\uFB00-\uFB4F\uFFF0-\uFFFF]/,
  supportedMonths: 96,
};
