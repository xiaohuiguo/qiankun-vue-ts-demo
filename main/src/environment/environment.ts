// 环境配置文件，区分各个环境
let host = window.location.host;
host = host.split(':')[0];
let platform = 'devlop';
switch (host) {
  case 'localhost':
  case '127.0.0.1':
    platform = 'devlop';
    break;
  default:
    platform = 'online';
}

const envUrl: {
  [key: string]: {
    host: any;
  };
} = {
    devlop: {
      host: host
    },
    online: {
      host: host
    }
  };

export const environment = envUrl[platform]
