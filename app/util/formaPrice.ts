export function formatCNY(value:string) {
    // 创建一个NumberFormat对象，指定语言环境为中文（中国）和货币为人民币
   Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2
    }).format(parseFloat(value));

  }
