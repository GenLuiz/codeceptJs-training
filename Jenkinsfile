pipeline {
    agent any
    tools {nodejs "NodeJs"}
    tools {nodejs "selenium-standalone"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install codeceptjs'
                sh 'npm install selenium-standalone'
                sh 'npm install @wdio/cli'
            }
        }
        stage('run tests') {
            steps{
                sh 'codeceptjs run --steps'
            }
        }
    }
}