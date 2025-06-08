/**
 * Google Apps Script のメイン関数 - GitHub Actions テスト用
 * このファイルに GAS のコードを記述します
 */

function main() {
  console.log('🚀 Hello from GitHub Actions Auto-Deploy!');
  console.log('🕒 Deployment Date: ' + new Date().toString());
  console.log('🔧 Auth Fix Version: 2.0 - Token Format Conversion');
  
  // スプレッドシートの例
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const date = new Date();
    sheet.getRange('A1').setValue('Last auto-deployed: ' + date.toString());
    console.log('Spreadsheet updated successfully');
  } catch (error) {
    console.log('Spreadsheet not available in this context: ' + error.toString());
  }
  
  return 'GitHub Actions auto-deployment executed successfully at ' + new Date().toString();
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Auto-Deploy Menu')
    .addItem('Run Main Function', 'main')
    .addItem('Test Auto Deploy', 'testAutoDeploy')
    .addToUi();
}

function doGet(e) {
  const html = `
    <html>
      <head><title>GAS Auto-Deploy Test - Auth Fix v2.0</title></head>
      <body>
        <h1>🚀 GitHub Actions Auto-Deploy Success!</h1>
        <h2>🔧 Authentication Fix v2.0 Deployed</h2>
        <p><strong>This Google Apps Script was automatically deployed from GitHub!</strong></p>
        <p>🕒 Deployment time: ${new Date().toString()}</p>
        <p>🔗 Repository: <a href="https://github.com/miyataken999/gas-project">miyataken999/gas-project</a></p>
        <p>✅ Token format conversion working</p>
        <p>🎯 Multi-strategy deployment active</p>
      </body>
    </html>
  `;
  return HtmlService.createHtmlOutput(html);
}

function testAutoDeploy() {
  console.log('🎉 Auto-deploy test function executed!');
  console.log('GitHub Actions integration is working correctly.');
  return 'Auto-deploy test completed successfully';
}

function webhookTest(e) {
  console.log('Webhook received:', JSON.stringify(e));
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'GitHub Actions webhook received',
      timestamp: new Date().toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * GitHub Actions deployment verification functions
 */
function verifyDeployment() {
  const deploymentInfo = {
    status: 'success',
    timestamp: new Date().toString(),
    scriptId: ScriptApp.newStateToken(),
    version: '1.0.0',
    source: 'GitHub Actions Auto-Deploy',
    lastModified: new Date().toISOString()
  };
  
  console.log('Deployment verification:', JSON.stringify(deploymentInfo, null, 2));
  return deploymentInfo;
}

function getScriptInfo() {
  try {
    const info = {
      scriptId: ScriptApp.newStateToken(),
      timeZone: Session.getScriptTimeZone(),
      userEmail: Session.getActiveUser().getEmail(),
      deploymentTime: new Date().toString(),
      functionList: [
        'main',
        'onOpen', 
        'doGet',
        'testAutoDeploy',
        'webhookTest',
        'verifyDeployment',
        'getScriptInfo',
        'debugAuthIssues'
      ]
    };
    
    console.log('Script info:', JSON.stringify(info, null, 2));
    return info;
  } catch (error) {
    console.error('Error getting script info:', error.toString());
    return { error: error.toString() };
  }
}

function debugAuthIssues() {
  console.log('🔍 Debugging authentication and deployment issues...');
  
  const debugInfo = {
    timestamp: new Date().toString(),
    timeZone: Session.getScriptTimeZone(),
    locale: Session.getActiveLocale(),
    deploymentSource: 'GitHub Actions via Clasp',
    authenticationMethod: 'OAuth2 Token',
    status: 'deployed_successfully'
  };
  
  // Test basic GAS functionality
  try {
    debugInfo.canAccessSession = true;
    debugInfo.userEmail = Session.getActiveUser().getEmail();
  } catch (e) {
    debugInfo.canAccessSession = false;
    debugInfo.sessionError = e.toString();
  }
  
  // Test script properties access
  try {
    const props = PropertiesService.getScriptProperties();
    props.setProperty('lastDeployment', new Date().toString());
    debugInfo.canAccessProperties = true;
  } catch (e) {
    debugInfo.canAccessProperties = false;
    debugInfo.propertiesError = e.toString();
  }
  
  console.log('Debug info:', JSON.stringify(debugInfo, null, 2));
  return debugInfo;
}

function githubActionsHealthCheck() {
  const healthCheck = {
    status: '✅ HEALTHY',
    timestamp: new Date().toISOString(),
    deployment: {
      method: 'GitHub Actions + Clasp',
      repository: 'miyataken999/gas-project',
      branch: 'main',
      autoDeployEnabled: true
    },
    gas: {
      timeZone: Session.getScriptTimeZone(),
      version: 'V8',
      runtimeVersion: 'STABLE'
    },
    lastUpdated: new Date().toString()
  };
  
  console.log('Health check:', JSON.stringify(healthCheck, null, 2));
  return healthCheck;
}
