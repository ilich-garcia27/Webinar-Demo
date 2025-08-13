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
      }
    }
    stage('Run Cypress tests') {
      steps {
        bat 'npm run test:ci'
      }
    }
    stage('Archive reports') {
      steps {
        archiveArtifacts artifacts: 'reports/mochawesome/*.json', allowEmptyArchive: true
      }
    }
  }
  post {
    always {
      junit 'reports/mochawesome/*.xml'
    }
  }
}
