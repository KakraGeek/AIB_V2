# 🚀 Deployment Guide - Agile Insurance

This guide explains how to deploy your Agile Insurance website to shared hosting using FTP/SFTP.

## **Quick Deploy Commands**

### **One-Command Production Deployment**
```bash
npm run prod
```
This builds your project and deploys it to production in one command.

### **Build Only**
```bash
npm run build
```
Builds the production-ready files in the `dist/` folder.

### **Deploy Only (after build)**
```bash
npm run deploy:ftp
```
Deploys the existing `dist/` folder to your hosting server.

## **Prerequisites**

- ✅ Node.js 18+ installed
- ✅ npm installed
- ✅ FTP/SFTP credentials configured in `.env.deploy`
- ✅ Build completed (`dist/` folder exists)

## **Configuration**

Your deployment settings are stored in `.env.deploy` (never committed to git):

```env
FTP_HOST=ftp.agilebrokersgh.com
FTP_USER=all76
FTP_PASS=@0248290189Z
FTP_PORT=22
REMOTE_ROOT=public_html
SITE_URL=https://agilebrokersgh.com
```

## **Deployment Process**

1. **Build**: `npm run build` creates optimized production files
2. **Deploy**: `npm run deploy:ftp` uploads files via SFTP
3. **Verify**: Check your live site at the configured URL

## **Troubleshooting**

### **Common Issues**

- **Build fails**: Check TypeScript errors and dependencies
- **Deploy fails**: Verify FTP credentials and server access
- **Site not loading**: Check file permissions and server configuration

### **Debug Commands**

```bash
# Check build output
ls -la dist/

# Test FTP connection manually
# Use FileZilla or similar to test credentials

# View deployment logs
npm run deploy:ftp
```

## **Security Notes**

- 🔒 `.env.deploy` is automatically git-ignored
- 🔒 Never commit credentials to version control
- 🔒 Use app passwords when possible
- 🔒 Regularly rotate FTP passwords

## **Alternative Deployment Methods**

### **PowerShell Script**
```powershell
.\scripts\deploy-ftp.ps1
```

### **Manual FTP**
Use FileZilla, WinSCP, or similar FTP clients to manually upload the `dist/` folder contents.

## **Post-Deployment Checklist**

- [ ] Site loads correctly at production URL
- [ ] All assets (CSS, JS, images) load properly
- [ ] Navigation and interactions work as expected
- [ ] Performance optimizations are active
- [ ] Mobile responsiveness verified

## **Rollback**

If deployment causes issues:
1. Access your hosting control panel
2. Restore from backup if available
3. Manually upload previous working version
4. Check server error logs for issues

---

**Need Help?** Check the deployment script output for detailed error messages and troubleshooting tips.
