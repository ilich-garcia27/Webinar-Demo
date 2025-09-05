pipeline {
  agent any

  environment {
    LANG = "en_US.UTF-8"
    LC_ALL = "en_US.UTF-8"
    NODE_ICU_DATA = "utf-8"
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
          bat '''
            chcp 65001
            npm run test:ci
          '''
        }
      }
    }
    stage('Archive reports') {
      steps {
        archiveArtifacts artifacts: 'reports/mochawesome/*.json', allowEmptyArchive: true
      }
    }
  }
}
