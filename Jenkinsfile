pipeline {
  agent any

  environment {
    GITHUB_TOKEN = credentials('github-username-token')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install dependencies') {
      steps {
        bat 'npm ci'
        bat 'npm install request punycode --save'
      }
    }
    stage('Run Cypress tests') {
      steps {
        ansiColor('xterm') {
          bat 'npm run test:ci'
        }
      }
    }
    stage('Archive reports') {
      steps {
        archiveArtifacts artifacts: 'reports/mochawesome/*.json', allowEmptyArchive: true
      }
    }
    stage('Publicar reporte HTML') {
      steps {
        publishHTML(target: [
      reportDir: 'reports/mochawesome',
      reportFiles: 'mochawesome.html',
      reportName: 'Reporte Mochawesome',
      allowMissing: true,
      alwaysLinkToLastBuild: true,
      keepAll: true
    ])
      }
    }
  }
}
