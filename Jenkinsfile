pipeline {
  agent any

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
        archiveArtifacts artifacts: 'reports/mochawesome/*.html', allowEmptyArchive: true
      }
    }
  }
}
