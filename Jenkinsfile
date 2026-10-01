pipeline {

    agent any

    tools {

        nodejs 'NodeJS-26'

    }

    stages {

        stage('Checkout') {

            steps {

                checkout scm

            }

        }

        stage('Install Dependencies') {

            steps {

                bat 'call npm install'

            }

        }

        stage('Install Browsers') {

            steps {

                bat 'call npx playwright install'

            }

        }

        stage('Run Playwright Tests') {

            steps {

                bat 'call npx playwright test --project=chromium'

            }

        }

    }

}